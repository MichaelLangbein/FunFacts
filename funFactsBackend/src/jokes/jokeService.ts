
export type HeadLine = string;

export type PunchLine = string;

export interface Joke {
    headLine: HeadLine,
    punchLine: PunchLine
};

export class JokeService {


    getHeadLine(): HeadLine {
        
    }

    storeJoke(body: Joke) {
        throw new Error('Method not implemented.');
    }

}