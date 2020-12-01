export default class GithubRepo {
  constructor(
    public name: string,
    public html_url: string,
    public description: string,
    public language: string
  ) {}
}
