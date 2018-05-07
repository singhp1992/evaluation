import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'


@Entity()
export default class Class extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    classNumber: number

    @Column('text', { nullable: true })
    startDate: string

    @Column('text', { nullable: true })
    endDate: string

}