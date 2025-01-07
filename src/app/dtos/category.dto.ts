import { AccessType, Category } from '../models/category.model';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator'; // Si empieza con mayus: es decorador, si empieza en minus: es funcion.

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty() // Valida que no este vacio
  @Length(4, 140) // Valida que tenga una longitud entre (a, b) numeros de caracteres.
  name!: string; // El signo (!) indica a typescript que la propiedad sera inicializada en otro momento, sin ponerla en (aceptar null: ?).

  //IMPORTANTE: Para que no falle hay que habilitar en el ts.config la propiedad "experimental decorators" a true.
  @IsNotEmpty()
  @IsUrl()
  image!: string; // El decorador "IsUrl" nos valida que la propiedad sea una url.

  @IsOptional()
  @IsEnum(AccessType) //Para validar si es enum hay que pasarle el tipo de enum, en este caso le pasamos AccessType
  access?: AccessType | undefined;
}

(async () => {
  try { // Usamos un try catch para atrapar el error intencional: No cumple con la longitud impuesta con el decorador.
    const dto = new CreateCategoryDto();
    dto.name = 'a'; // Aqui falla, pero no nos mostrará el error hasta hacer run.
    await validateOrReject(dto);
  } catch (error) {
    console.log(error); // Esto nos imprimira los errores.
  }
})();
