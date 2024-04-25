import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoleEnum } from 'src/enum/user-role.enum';

@Entity()
export class UserEntity {
    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column({
    type: 'enum',
    enum: UserRoleEnum
    })
    role: string;
}