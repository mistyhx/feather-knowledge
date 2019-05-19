// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTopic = `query GetTopic($id: ID!) {
  getTopic(id: $id) {
    id
    name
    knowledge {
      items {
        id
        title
        content
      }
      nextToken
    }
  }
}
`;
export const listTopics = `query ListTopics(
  $filter: ModelTopicFilterInput
  $limit: Int
  $nextToken: String
) {
  listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      knowledge {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getKnowledge = `query GetKnowledge($id: ID!) {
  getKnowledge(id: $id) {
    id
    title
    content
    topics {
      id
      name
      knowledge {
        nextToken
      }
    }
  }
}
`;
export const listKnowledges = `query ListKnowledges(
  $filter: ModelKnowledgeFilterInput
  $limit: Int
  $nextToken: String
) {
  listKnowledges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      topics {
        id
        name
      }
    }
    nextToken
  }
}
`;
