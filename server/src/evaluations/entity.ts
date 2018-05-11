import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

type Color = 'green' | 'yellow' | 'red'

@Entity()
export default class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    // @Column('text')
    // student: number

    @Column('text')
    batch: number

    @Column('text')
    date: string
    //change to Date?

    @Column('text')
    evaluation: Color

    @Column('text')
    remarks?: string

}