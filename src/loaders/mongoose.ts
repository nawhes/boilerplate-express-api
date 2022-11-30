import { MongoClient, Db } from 'mongodb';
import config from '@/config';

export default async (): Promise<Db> => {
  const client = new MongoClient(config.mongoDBURL);
  await client.connect();
  const db = client.db(config.mongoDBName);
  return db;
};
