
import { Post, Param, Get, Body, Patch, JsonController, Delete, NotFoundError } from 'routing-controllers'
import Class from './entity'


@JsonController()
export default class ClassController {

    @Post('/classes')
    // @HttpCode(201)
    async createClass(
        @Body() class: Class
    ) {
        const entity = await class.save()

        return { entity }
    }

    @Post('/users')
    async createUser(
        @Body() user: User
    ) {
        const { password, ...rest } = user
        const entity = User.create(rest)
        await entity.setPassword(password)
        return entity.save()
    }

    @Patch('/classes/:id([0-9]+)')
    async updateClasses(
        @Param('id') classId: number,
        @Body() update//: QuestionsUpdate
    ) {
        console.log('At line1 Patch')

        const class = await Class.findOneById(classId)

        console.log('At line2 Patch')

        class = update
        if (class)
            return class.save()
        else
            return 'error'
    }

@Get('/classes')
@HttpCode(201)
getQuestion() {
    return Question.find()
}

@Get('/quizquestions/:id([0-9]+)')
@HttpCode(201)
getQuizQuestions(
        @Param('id') quizRequestId: number
    ) {
    console.log('youve made it here')
    let quizQuestion = Question.find({ quiz: quizRequestId })

    return quizQuestion
}

@Delete('/questions/:id')
async deleteQuestion(
        @Param('id') id: number
    ) {
    const question = await Question.findOneById(id)

    if (!question) throw new NotFoundError('Question doesn\'t exist')

    if (question) Question.removeById(id)
    return 'successfully deleted'
}
}