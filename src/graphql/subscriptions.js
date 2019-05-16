// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTopic = `subscription OnCreateTopic {
  onCreateTopic {
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
export const onUpdateTopic = `subscription OnUpdateTopic {
  onUpdateTopic {
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
export const onDeleteTopic = `subscription OnDeleteTopic {
  onDeleteTopic {
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
export const onCreateKnowledge = `subscription OnCreateKnowledge {
  onCreateKnowledge {
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
export const onUpdateKnowledge = `subscription OnUpdateKnowledge {
  onUpdateKnowledge {
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
export const onDeleteKnowledge = `subscription OnDeleteKnowledge {
  onDeleteKnowledge {
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
