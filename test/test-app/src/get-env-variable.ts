import { ApiProperty } from "@nestjs/swagger";

export class GetEnvironmentVariable {
    @ApiProperty()
    public variable: string;
}
