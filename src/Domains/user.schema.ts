import { UserRoleEnum } from 'src/Domains/user-role.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop({required : true})
    firstname: string;

    @Prop({required : true})
    lastname: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    password: string;

    @Prop()
    salt: string;

    @Prop({
        type: String,
        enum: UserRoleEnum,
    })
    role: UserRoleEnum;
}

export const UserSchema = SchemaFactory.createForClass(User);
