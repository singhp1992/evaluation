import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm'
import  Batch from '../batches/entity'

@Entity()
export default class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @ManyToOne(_ => Batch, batch => batch.students)
    batch: Batch
    
    //@IsDate()
    @Column('text', { nullable: false })
    firstName: string

    //@IsDate()
    @Column('text', { nullable: false })
    lastName: string

    @Column('text', { nullable: true })
    profilePic: string 

    @Column('text', { nullable: true })
    lastEvaluation?: string
}