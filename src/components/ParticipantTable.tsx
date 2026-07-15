import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar
} from '@mui/material';

const participants = [
  { rank: 1, name: 'Parija Faiza', className: 'PEMROGRAMAN', module: 'L1', point: '1,234 Point', avatar: 'https://picsum.photos/seed/parija/32/32' },
  { rank: 2, name: 'Rian Saputra', className: 'PEMROGRAMAN', module: 'L2', point: '1,180 Point', avatar: 'https://picsum.photos/seed/rian/32/32' },
  { rank: 3, name: 'Dewi Lestari', className: 'MARKETING', module: 'L1', point: '1,120 Point', avatar: 'https://picsum.photos/seed/dewi/32/32' }
];

const ParticipantTable: React.FC = () => {
  return (
    <Paper sx={{ borderRadius: 3, overflow: 'hidden', p: 3 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        NILAI PESERTA
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Modul</TableCell>
              <TableCell>Point</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.map((p) => (
              <TableRow key={p.rank}>
                <TableCell>{p.rank}</TableCell>
                <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={p.avatar} sx={{ width: 28, height: 28 }} />
                  {p.name}
                </TableCell>
                <TableCell>{p.className}</TableCell>
                <TableCell>{p.module}</TableCell>
                <TableCell>{p.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ParticipantTable;
