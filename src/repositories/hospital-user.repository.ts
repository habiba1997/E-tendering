import { DefaultCrudRepository } from '@loopback/repository';
import { HospitalUser, HospitalUserRelations } from '../models';
import { ETenderingDatabaseDataSource } from '../datasources';
import { inject } from '@loopback/core';
export type Credentials = {
  email: string;
  password: string;
};
export class HospitalUserRepository extends DefaultCrudRepository<
  HospitalUser,
  typeof HospitalUser.prototype._id,
  HospitalUserRelations
  > {
  constructor(
    @inject('datasources.eTenderingDatabase') dataSource: ETenderingDatabaseDataSource,
  ) {
    super(HospitalUser, dataSource);
  }
}
