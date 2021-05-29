import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import Convention from './Convention';
import Company from './Company';
import Hanbok from './Hanbok';
import Event from './Event';
import Meal from './Meal';
import Present from './Present';
import Reserve from './Reserve';

@Entity()
class Wedding extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  husband_name!: string;

  @Column({ type: 'text' })
  bride_name!: string;

  @Column({ type: 'text' })
  wedding_at!: string;

  @Column({ type: 'text' })
  event_at!: string;

  @Column()
  cost_husband!: number;

  @Column()
  cost_bride!: number;

  @Column()
  meal_husband!: number;

  @Column()
  meal_bride!: number;

  @Column()
  present_husband!: number;

  @Column()
  present_bride!: number;

  @Column()
  reserve_husband!: number;

  @Column()
  reserve_bride!: number;

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  created_at!: Date;

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updated_at!: Date;

  // relations
  @Column({ nullable: true })
  conventionId!: string;

  @OneToOne((type) => Convention, (convention) => convention.weddingId)
  convention!: Convention;

  @Column({ nullable: true })
  companyId!: string;

  @OneToOne((type) => Company, (company) => company.weddingId)
  company!: Company;

  @Column({ nullable: true })
  hanbokId!: string;

  @OneToOne((type) => Hanbok, (hanbok) => hanbok.weddingId)
  hanbok!: Hanbok;

  @Column({ nullable: true })
  eventId!: string;

  @OneToOne((type) => Event, (event) => event.weddingId)
  event!: Event;

  @Column({ nullable: true })
  mealId!: string;

  @OneToOne((type) => Meal, (meal) => meal.weddingId)
  meal!: Meal;

  @Column({ nullable: true })
  presentId!: string;

  @OneToOne((type) => Present, (present) => present.weddingId)
  present!: Present;

  @Column({ nullable: true })
  reserveId!: string;

  @OneToOne((type) => Reserve, (reserve) => reserve.weddingId)
  reserve!: Reserve;
}

export default Wedding;
