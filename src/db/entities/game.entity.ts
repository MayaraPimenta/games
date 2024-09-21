import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('game')
export class GameEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'varchar'})
  name: string;

  @Column( 'varchar', { array: true })
  platforms: string[];
}
