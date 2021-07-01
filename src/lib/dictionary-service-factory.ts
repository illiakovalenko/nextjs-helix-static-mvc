import { DictionaryService, RestDictionaryService } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';

export class DictionaryServiceFactory {
  create(): DictionaryService {
    return new RestDictionaryService({
      apiHost: config.sitecoreApiHost,
      apiKey: config.sitecoreApiKey,
      siteName: 'basic-company',
    });
  }
}

export const dictionaryServiceFactory = new DictionaryServiceFactory();
