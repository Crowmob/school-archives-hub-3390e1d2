import zasady from "@/assets/docs/zasady-rekrutacji.pdf.asset.json";

import deklaracjaDocx from "@/assets/docs/deklaracja-wyboru-rozszerzenia.docx.asset.json";
import deklaracjaPdf from "@/assets/docs/deklaracja-wyboru-rozszerzenia.pdf.asset.json";
import kwestLoDocx from "@/assets/docs/kwestionariusz-LO.docx.asset.json";
import kwestLoPdf from "@/assets/docs/kwestionariusz-LO.pdf.asset.json";
import podKandLoDocx from "@/assets/docs/podanie-kandydata-LO.docx.asset.json";
import podKandLoPdf from "@/assets/docs/podanie-kandydata-LO.pdf.asset.json";
import podRodzLoDocx from "@/assets/docs/podanie-rodzicow-LO.docx.asset.json";
import podRodzLoPdf from "@/assets/docs/podanie-rodzicow-LO.pdf.asset.json";
import wizerunekDocx from "@/assets/docs/zezwolenie-wizerunek.docx.asset.json";
import wizerunekPdf from "@/assets/docs/zezwolenie-wizerunek.pdf.asset.json";
import zgodaPobytDocx from "@/assets/docs/zgoda-na-pobyt.docx.asset.json";
import rozmiarowkaPdf from "@/assets/docs/rozmiarowka.pdf.asset.json";
import rozmiarowkaXlsx from "@/assets/docs/rozmiarowka.xlsx.asset.json";

import kartaZdrowiaDocx from "@/assets/docs/karta-zdrowia.docx.asset.json";
import kartaZdrowiaPdf from "@/assets/docs/karta-zdrowia.pdf.asset.json";
import alkomatDocx from "@/assets/docs/oswiadczenie-alkomat.docx.asset.json";
import alkomatPdf from "@/assets/docs/oswiadczenie-alkomat.pdf.asset.json";
import podKandIntDocx from "@/assets/docs/podanie-kandydata-internat.docx.asset.json";
import podKandIntPdf from "@/assets/docs/podanie-kandydata-internat.pdf.asset.json";
import podRodzIntDocx from "@/assets/docs/podanie-rodzicow-internat.docx.asset.json";
import podRodzIntPdf from "@/assets/docs/podanie-rodzicow-internat.pdf.asset.json";
import medycznaDoc from "@/assets/docs/zgoda-medyczna.doc.asset.json";
import medycznaPdf from "@/assets/docs/zgoda-medyczna.pdf.asset.json";
import samodzielneDoc from "@/assets/docs/zgoda-samodzielne.doc.asset.json";
import samodzielnePdf from "@/assets/docs/zgoda-samodzielne.pdf.asset.json";

export type DocLink = { kind: "PDF" | "DOC" | "DOCX" | "XLSX"; url: string };
export type DocItem = { name: string; files: DocLink[] };

export const zasadyDoc: DocItem = {
  name: "Zasady rekrutacji 2026/2027",
  files: [{ kind: "PDF", url: zasady.url }],
};

export const loDocs: DocItem[] = [
  {
    name: "Kwestionariusz LO 4-letnie",
    files: [
      { kind: "DOCX", url: kwestLoDocx.url },
      { kind: "PDF", url: kwestLoPdf.url },
    ],
  },
  {
    name: "Podanie kandydata",
    files: [
      { kind: "DOCX", url: podKandLoDocx.url },
      { kind: "PDF", url: podKandLoPdf.url },
    ],
  },
  {
    name: "Podanie rodziców",
    files: [
      { kind: "DOCX", url: podRodzLoDocx.url },
      { kind: "PDF", url: podRodzLoPdf.url },
    ],
  },
  {
    name: "Deklaracja wyboru rozszerzenia",
    files: [
      { kind: "DOCX", url: deklaracjaDocx.url },
      { kind: "PDF", url: deklaracjaPdf.url },
    ],
  },
  {
    name: "Zezwolenie na rozpowszechnianie wizerunku",
    files: [
      { kind: "DOCX", url: wizerunekDocx.url },
      { kind: "PDF", url: wizerunekPdf.url },
    ],
  },
  {
    name: "Zgoda na pobyt w Polsce",
    files: [{ kind: "DOCX", url: zgodaPobytDocx.url }],
  },
  {
    name: "Rozmiarówka / Размеры",
    files: [
      { kind: "PDF", url: rozmiarowkaPdf.url },
      { kind: "XLSX", url: rozmiarowkaXlsx.url },
    ],
  },
];

export const internatDocs: DocItem[] = [
  {
    name: "Podanie kandydata (internat)",
    files: [
      { kind: "DOCX", url: podKandIntDocx.url },
      { kind: "PDF", url: podKandIntPdf.url },
    ],
  },
  {
    name: "Podanie rodziców (internat)",
    files: [
      { kind: "DOCX", url: podRodzIntDocx.url },
      { kind: "PDF", url: podRodzIntPdf.url },
    ],
  },
  {
    name: "Karta zdrowia",
    files: [
      { kind: "DOCX", url: kartaZdrowiaDocx.url },
      { kind: "PDF", url: kartaZdrowiaPdf.url },
    ],
  },
  {
    name: "Zgoda – oświadczenie medyczne",
    files: [
      { kind: "DOC", url: medycznaDoc.url },
      { kind: "PDF", url: medycznaPdf.url },
    ],
  },
  {
    name: "Zgoda na samodzielne poruszanie się",
    files: [
      { kind: "DOC", url: samodzielneDoc.url },
      { kind: "PDF", url: samodzielnePdf.url },
    ],
  },
  {
    name: "Oświadczenie – badanie alkomatem",
    files: [
      { kind: "DOCX", url: alkomatDocx.url },
      { kind: "PDF", url: alkomatPdf.url },
    ],
  },
];
