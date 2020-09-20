import { ApiProperty } from "@nestjs/swagger";

export class GetEnvironmentVariableType {
    @ApiProperty()
    public variable: string;
}

export class GetFileType {
    @ApiProperty()
    public path: string;
}

export class ExecuteShellCommandType {
    @ApiProperty()
    public command: string;
}
