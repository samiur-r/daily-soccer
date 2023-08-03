export interface DataType {
  Competition: {
    Name: string;
  };
  LocalTeam: {
    Name: string;
    Image: string;
  };
  AwayTeam: {
    Name: string;
    Image: string;
  };
  Date: string;
  Channels: Array<{
    Name: string;
    Image: string;
  }>;
}
