import {Container} from "typedi";
import GitUserServiceImpl from "../../src/services/implementation/gitUserServiceImpl";


const gitUserServiceImpl = Container.get(GitUserServiceImpl);

describe('getUserByNickname', () => {
    it('Should throw an error when passing in an empty nickname', () => {
        function userEmpty(){
            gitUserServiceImpl.getUserByNickname('');
        } 
            
        expect(userEmpty).toThrow();
    });


});