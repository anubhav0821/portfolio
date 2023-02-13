
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client =sanityClient({
    projectId: 'guycnby2',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sk8zbysxCa0mlpDwmjLBNm7sgstY98IB6ouNQo0MaoLCkQL3RwRbmmlSDEugdl1jZrzdYHjC8zGPleo0dmrwQJWw94CISdIqZNx7wlmEaz2mqTMCeAKTFVesKpEhHg7mN35GUn1hjeowIrQ3C87uZ7FsbVwTjqGiUCW3OJbwVVmo6Tbuu4yI',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);