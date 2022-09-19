import { Item } from "semantic-ui-react";

export const ResultPreview = ({ result }) => {
  return (
    <li className="result-preview">
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={result.snippet.thumbnails.default.url} />

          <Item.Content>
            <Item.Header as="a">{result.snippet.title}</Item.Header>
            <Item.Meta>{result.snippet.description}</Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </li>
  );
};

export default ResultPreview;
