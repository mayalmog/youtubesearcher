import { Item } from "semantic-ui-react";

export const ResultPreview = ({ result }) => {
  return (
    <li className="result-preview">
      <a
        target="_blank"
        href={`https://www.youtube.com/watch?v=${result.id.videoId}`}
      >
        <Item.Group>
          <Item>
            <Item.Image src={result.snippet.thumbnails.medium.url} />

            <Item.Content>
              <Item.Header>{result.snippet.title}</Item.Header>
              <Item.Meta>{result.snippet.description}</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </a>
    </li>
  );
};

export default ResultPreview;
