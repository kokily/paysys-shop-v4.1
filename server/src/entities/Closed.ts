import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import ClosedUser from './ClosedUser';

@Entity()
class Closed extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  year!: string;

  @Column({ type: 'text' })
  month!: string;

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  created_at!: Date;

  @OneToMany((type) => ClosedUser, (closed_user) => closed_user.closed)
  closed_users!: ClosedUser[];
}

export default Closed;
