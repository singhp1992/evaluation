import { JsonController, Get, Param, Put, Body, Post, Delete, NotFoundError } from 'routing-controllers'
import Student from './entity'

@JsonController()
export default class StudentController {
    // requests all students
    @Get('/students')
    allStudents() {
        return Student.find()
    }

    // requests one student
    @Get('/students/:id')
    async student(
        @Param('id') id: number
    ) {
        const student = await Student.findOne(id)
        return { student }
    }

    // creates a student
    @Post('/students')
    async createStudent(
        @Body() student: Student
    ) {
        const entity = await student.save()
        return { entity }
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
} 