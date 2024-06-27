import {
  AutoIncrement,
  Column,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';

@Table({
  tableName: 'passengers',
  timestamps: true,
  underscored: true,
})
export default class Passenger extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
