import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm'
//import { IsDate } from 'class-validator'
//import Student from '../students/entity'


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

    // @OneToMany(_ => Student, student => student.batch)
    // students: Student[]

}