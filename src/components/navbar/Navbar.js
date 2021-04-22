import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';
import './style.css';

export default function CustomNavbar() {
  return (
    <div className="custom_navbar backblue">
      <Navbar >
          <img
            href="/"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAABUCAYAAABEOEGdAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAUbaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTEtMDNUMDE6NDU6NDktMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTExLTAzVDAxOjQ4OjEzLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTExLTAzVDAxOjQ4OjEzLTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NmJhMGMwZmMtMWQzMC0xNTQxLTg5NWItZmFjYWZkYzNmM2YyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZiYTBjMGZjLTFkMzAtMTU0MS04OTViLWZhY2FmZGMzZjNmMiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjZiYTBjMGZjLTFkMzAtMTU0MS04OTViLWZhY2FmZGMzZjNmMiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmJhMGMwZmMtMWQzMC0xNTQxLTg5NWItZmFjYWZkYzNmM2YyIiBzdEV2dDp3aGVuPSIyMDE5LTExLTAzVDAxOjQ1OjQ5LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZcApOQAAIaRJREFUeJztnXd4VFXawH8nPUMaGCIJgqFjQteIgAgqK50ggitiQ9e66ufKZ9k1u64a18VPF1EXKy6uIghKL2IDpEpvIYQmJYSElj6Tfr4/zp1yJ3cyk4Se+3uePJl75txzz71z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"
          />
        <NavbarText className="custom_navbar_text text-title">
          Calculadora de Horas
        </NavbarText>
      </Navbar>
    </div>
  );
}
