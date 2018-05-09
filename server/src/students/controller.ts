import { JsonController, Get, Param, Put, Body, Post, Delete, NotFoundError } from 'routing-controllers'
import Student from './entity'

@JsonController()
export default class StudentController {
    // requests all students
    @Get('/students')
    getStudents() {
        return Student.find()
    }

    // requests one student
    @Get('/students/:id([0-9]+')
    async getStudentById(
        @Param('id') id: number
    ) {
        const student = await Student.findOne(id)

        if (!student) throw new NotFoundError('No student found.')

        return student
    }

    //get student by batch number
    @Get('/students/:id([0-9]+')
    async getStudentByBatchNumber(
        @Param('id') batchNumber: string
    ) {
        const student = await Student.findOne(batchNumber)

        if (!student) throw new NotFoundError('No students in this batch.')

        return student
    }

    // creates a student
    @Post('/students')
    async createStudent(
        @Body() student: Student
    ) {
        const entity = await student.save()

        return entity
    }

    // edits a student
    @Put('/students/:id')
    // @HttpCode(200)
    async editStudent(
        @Param('id') id: number,
        @Body() update: Partial<Student>
    ) {
        const student = await Student.findOne(id)
        if (!student) throw new NotFoundError('Student doesn\'t exist')

        return Student.merge(student, update).save()
    }

    // deletes a student
    @Delete('/students/:id')
    async deleteStudent(
        @Param('id') id: number
    ) {
        const student = await Student.findOne(id)
        if (!student) throw new NotFoundError('Student doesn\'t exist')

        if (student) Student.delete(id)
        return 'successfully deleted'
    }

    //should request student by batchNumber
    // @Get('/batchStudents/:id([0-9]+)')
    // getbatchStudents(
    //     @Param('id') batchRequestId: number
    // ) {
    //     console.log('youve made it here')
    //     let batchStudents = Student.find({ batch: batchRequestId })
    //     return batchStudents
    // }

} 