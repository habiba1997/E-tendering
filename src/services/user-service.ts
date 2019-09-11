
import { HttpErrors } from '@loopback/rest';
import { Credentials, HospitalUserRepository } from '../repositories/hospital-user.repository';
import { HospitalUser } from '../models/hospital-user.model';
import { UserService, UserProfile } from '@loopback/authentication';
import { repository } from '@loopback/repository';
import { PasswordHasher } from './hash.password.bcryptjs';
import { PasswordHasherBindings } from '../keys';
import { inject } from '@loopback/context';

export class MyUserService implements UserService<HospitalUser, Credentials> {


  constructor(
    @repository(HospitalUserRepository) public userRepository: HospitalUserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) { }

  async verifyCredentials(credentials: Credentials): Promise<HospitalUser> {
    const invalidCredentialsError = 'Invalid email or password.';

    const foundUser = await this.userRepository.findOne({
      where: { email: credentials.email },
    });

    if (!foundUser) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    return foundUser;
  }

  convertToUserProfile(user: HospitalUser): UserProfile {
    return { id: user._id, email: user.email };
  }
}
