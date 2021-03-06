import { JsonController, Get, Param, Put, Body, Post, Delete, NotFoundError, HttpCode } from 'routing-controllers'
import Student from './entity'

@JsonController()
export default class StudentController {
    //requests all students
    @Get('/students')
    getStudents() {
        return Student.find()
    }

    // requests one student
    @Get('/students/:id')
    async getStudentById(
        @Param('id') id: number
    ) {
        const student = await Student.findOne(id)

        if (!student) throw new NotFoundError('No student found.')
        console.log(student)
        return student
    }

    //get student by batch number
    // @Get('/classstudents/:id([0-9]+)')
    // @HttpCode(201)
    // getClassStudents(
    //     @Param('id') batchRequestId: number
    //         @Body() update: Partial<Student>
    // ) {
    //     console.log('youve made it here')
    //     let classStudents = Student.find( {batchRequestId: batchRequestId} )

    //     return classStudents
    // }

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
    async editStudent(
        @Param('id') id: number,
        @Body() update: Partial<Student>
    ) {
        const student = await Student.findOne(id)
        if (!student) throw new NotFoundError('Student doesn\'t exist')

        return Student.merge(student, update).save()
    }

    // deletes a student
    @Delete('/students/:id([0-9]+)')
    async deleteStudent(
        @Param('id') studentId: number
    ) {
        const student = await Student.findOne(studentId)
        if (!student) throw new NotFoundError('Student doesn\'t exist')

        await student.remove()

        return { id: studentId }
    }

    @Get('/students/:lastEvaluation')
    @HttpCode(201)
    async getEvaluation(
        @Param('lastEvaluation') lastEvaluation: string,
    ) {
        console.log('the last evaluation is working!')
        // const student = await Students.findOneById(id)
        return await Student.findOne(lastEvaluation)
    }

    // @Get('/students/:id')
    // async getStudentById(
    //     @Param('id') id: number
    // ) {
    //     const student = await Student.findOne(id)

    //     if (!student) throw new NotFoundError('No student found.')
    //     console.log(student)f
    //     return student
    // }



} 