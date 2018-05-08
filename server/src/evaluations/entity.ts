import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

type Color = 'green' | 'yellow' | 'red'

@Entity()
export default class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    student: number

    @Column('text', { nullable: false })
    batch: number

    @Column('text', { nullable: false })
    date: string
    //change to Date?

    @Column('text', { nullable: false })
    evaluation: Color

    @Column('text', { nullable: true })
    remarks?: string

}