import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
export default class Batch extends BaseEntity {

    @Column('text', { nullable: true })
    batchNumber: number

    @PrimaryGeneratedColumn()
    id?: number

    //@IsDate()
    @Column('text', { nullable: true })
    startDate: string

    //@IsDate()
    @Column('text', { nullable: true })
    endDate: string

}