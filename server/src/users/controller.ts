import { JsonController, Get, Param, Put, Body, Post, Delete, NotFoundError } from 'routing-controllers'
import User from './entity'

@JsonController()
export default class UserController {
    // requests all users
    @Get('/users')
    async allUsers() {
        const users = await User.find()
        if (!users) throw new NotFoundError('Users table doesn\'t exist')
        return { users }
    }
    // requests one user
    @Get('/users/:id')
    async user(
        @Param('id') id: number
    ) {
        const user = await User.findOne(id)
        //is it find one now or findOneById???
        return { user }
    }

    // creates a user
    @Post('/users')
    async createUser(
        @Body() user: User
    ) {
        const { password, ...rest } = user
        const entity = User.create(rest)
        await entity.setPassword(password)
        return entity.save()
    }
    // edits a user
    @Put('/users/:id')
    // @HttpCode(200)
    async editUser(
        @Param('id') id: number,
        @Body() update: Partial<User>
    ) {
        const user = await User.findOne(id)
        if (!user) throw new NotFoundError('User doesn\'t exist')

        return User.merge(user, update).save()
    }

    // deletes a user
    @Delete('/users/:id')
    async deleteUser(
        @Param('id') id: number
    ) {
        const user = await User.findOne(id)
        if (!user) throw new NotFoundError('User doesn\'t exist')

        if (user) User.delete(id)
        return 'successfully deleted'
    }
} 