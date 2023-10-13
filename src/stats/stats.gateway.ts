import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { StatsService } from './stats.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';

@WebSocketGateway()
export class StatsGateway {
  constructor(private readonly statsService: StatsService) {}

  @SubscribeMessage('createStat')
  create(@MessageBody() createStatDto: CreateStatDto) {
    return this.statsService.create(createStatDto);
  }

  @SubscribeMessage('findAllStats')
  findAll() {
    return this.statsService.findAll();
  }

  @SubscribeMessage('findOneStat')
  findOne(@MessageBody() id: number) {
    return this.statsService.findOne(id);
  }

  @SubscribeMessage('updateStat')
  update(@MessageBody() updateStatDto: UpdateStatDto) {
    return this.statsService.update(updateStatDto.id, updateStatDto);
  }

  @SubscribeMessage('removeStat')
  remove(@MessageBody() id: number) {
    return this.statsService.remove(id);
  }
}
