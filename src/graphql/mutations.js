// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTopic = `mutation CreateTopic($input: CreateTopicInput!) {
  createTopic(input: $input) {
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
export const updateTopic = `mutation UpdateTopic($input: UpdateTopicInput!) {
  updateTopic(input: $input) {
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
export const deleteTopic = `mutation DeleteTopic($input: DeleteTopicInput!) {
  deleteTopic(input: $input) {
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
export const createKnowledge = `mutation CreateKnowledge($input: CreateKnowledgeInput!) {
  createKnowledge(input: $input) {
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
export const updateKnowledge = `mutation UpdateKnowledge($input: UpdateKnowledgeInput!) {
  updateKnowledge(input: $input) {
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
export const deleteKnowledge = `mutation DeleteKnowledge($input: DeleteKnowledgeInput!) {
  deleteKnowledge(input: $input) {
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
