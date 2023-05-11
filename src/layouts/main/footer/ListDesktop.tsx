// @mui
import { Stack, Typography } from '@mui/material';
//
import { NavListProps } from '../nav';
import { StyledLink } from './styles';

// ----------------------------------------------------------------------

export default function ListDesktop({ list }: { list: NavListProps }) {
  const { subheader, items } = list;
  console.log('🚀 ~ file: ListDesktop.tsx:11 ~ ListDesktop ~ subheader, items:', subheader, items);

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{subheader}</Typography>

      {items?.map((link) => (
        <StyledLink key={link.title} href={link.path}>
          {link.title}
        </StyledLink>
      ))}
    </Stack>
  );
}
