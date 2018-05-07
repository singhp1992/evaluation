import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'
//import { IsDate } from 'class-validator'


@Entity()
export default class Batch extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    batchNumber: number

    //@IsDate()
    @Column('text', { nullable: true })
    startDate: string

    //@IsDate()
    @Column('text', { nullable: true })
    endDate: string

}