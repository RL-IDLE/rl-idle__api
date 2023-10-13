import { Timestamp } from "src/Generic/timestamp.entity";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class StatEntity extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    nullable: true,
    unique: false
  })
  money: string
}
