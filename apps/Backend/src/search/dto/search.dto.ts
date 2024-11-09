import { Transform } from "class-transformer";
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { SearchTypes } from "@filmmm/types";

const allowedSearchTypes = ['collection', 'movie', 'actor', 'company', 'keyword']

export class SearchParamDTO {
    @IsIn(allowedSearchTypes, { message: `Type must be one of: ${allowedSearchTypes.join(', ')}`})
    type: SearchTypes;
}

export class SearchQueryDTO {
    @IsNotEmpty()
    query:string;

    @IsOptional()
    include_adult:boolean = false;

    @IsOptional()
    @Transform(({value}) => Number(value))
    year?: number;

    @IsOptional()
    @Transform(({value}) => Number(value))
    page?:number = 1;

}