import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'v3ejk74d',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sko13RDVCP6DL82w4dA9DQ5uDaRhkeUssB07BtoWkkN9peCIAQfkZHTUWWfgxVv3VHnHrJ9U6B6N2y6Ph0M5ntckG4xfXq9uK6WE2UgOdiz6q8rijjCrj8QjvOeLoIO6nFOepCvAzrV8ptlRayciAnwfrB2hvZgA3L0ihWJ3uZF2bqAwDPsn',
  useCdn: false,
})