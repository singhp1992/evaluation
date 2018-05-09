import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm'
//import { IsDate } from 'class-validator'
import Student from '../students/entity'


@Entity()
export default class Batch extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @OneToMany(_ => Student, student => student.batch)
    students: Student[]

    // @Column('text', { nullable: false })
    // batchNumber: number

    //@IsDate()
    @Column('text', { nullable: true })
    startDate: string
    //change to Date?

    //@IsDate()
    @Column('text', { nullable: true })
    endDate: string

}