# LMS Adhivasindo - Frontend

Frontend aplikasi Learning Management System untuk Take Home Test Fullstack Developer di PT. Adhikari Inovasi Indonesia (Adhivasindo).

## Tech Stack

- React.js
- TypeScript
- Vite
- Material-UI (MUI)
- Axios
- React Router DOM

## Fitur

- Halaman Login dan Register
- Dashboard LMS dengan layout sesuai design
- CRUD Modul (Create, Read, Update, Delete)
- Search dan Pagination
- Responsive design

## Prasyarat

- Node.js (LTS)
- Backend API sudah berjalan di `http://localhost:5000`

## Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Konfigurasi Environment

Copy file environment example:

```bash
cp .env.example .env
```

File `.env` default sudah mengarah ke backend lokal:

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## Build untuk Production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`.

## Akun Demo

Setelah backend di-seed, gunakan akun berikut untuk login:

- Email: `admin@adhivasindo.co.id`
- Password: `admin123`

## Backend API

Repo backend: [lms-adhivasindo-backend](https://github.com/asephendar/lms-adhivasindo-backend)