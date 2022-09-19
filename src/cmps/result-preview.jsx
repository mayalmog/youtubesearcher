import { Item } from "semantic-ui-react";

const ResultPreview = ({ result }) => {
  return (
    <li
      className="result-preview"
      onClick={() => setCurrentVideo(result.id.videoId)}
    >
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={result.snippet.thumbnails.default.url} />

          <Item.Content>
            <Item.Header as="a">{result.snippet.title}</Item.Header>
            <Item.Meta className={theme}>
              {result.snippet.description}
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </li>
  );
};

export default ResultPreview;
