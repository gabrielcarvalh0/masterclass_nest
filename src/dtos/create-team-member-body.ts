import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100, {
    message: 'Nome muito curto ai'
  })
  name: string;
  @IsNotEmpty({
    message: 'The member function não enviou'
  })
  function: string;
}
