import { Timestamp } from "../../Generic/timestamp.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stat")
export class StatEntity extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    nullable: true,
    unique: false
  })
  money: string

  @Column({
    nullable: true,
    unique: false
  })
  clicks: number

  
}
