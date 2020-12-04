import Commit from "./commit";


export default interface CommitsGroupedbyDate {
    [createdAt: string] : Commit[];
}