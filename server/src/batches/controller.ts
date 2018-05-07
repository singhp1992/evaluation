import { JsonController, Get, Param, Put, Body, Post, Delete, NotFoundError } from 'routing-controllers'
import Batch from './entity'

@JsonController()
export default class BatchController {
    // requests all batches
    @Get('/batches')
    async allBatches() {
        const batches = await Batch.find()
        if (!batches) throw new NotFoundError('Batches table doesn\'t exist')
        return { batches }
    }
    // requests one batch
    @Get('/batches/:id')
    async batch(
        @Param('id') id: number
    ) {
        const batch = await Batch.findOne(id)
        //is it find one now or findOneById???
        return { batch }
    }

    // creates a batch
    @Post('/batches')
    async createBatch(
        @Body() batch: Batch
    ) {
        const entity = await Batch.create()
        return { entity }
    }
    // edits a batch
    @Put('/batches/:id')
    // @HttpCode(200)
    async editBatch(
        @Param('id') id: number,
        @Body() update: Partial<Batch>
    ) {
        const batch = await Batch.findOne(id)
        if (!batch) throw new NotFoundError('Batch doesn\'t exist')

        return Batch.merge(batch, update).save()
    }

    // deletes a batch
    @Delete('/batches/:id')
    async deleteBatch(
        @Param('id') id: number
    ) {
        const batch = await Batch.findOne(id)
        if (!batch) throw new NotFoundError('Batch doesn\'t exist')

        if (batch) Batch.delete(id)
        return 'successfully deleted'
    }
} 