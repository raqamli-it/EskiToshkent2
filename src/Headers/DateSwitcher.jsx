import moment from "moment-hijri";

function DateSwitcher() {
  const hijriMonths = [
    "muharram",
    "safar",
    "rabiul avval",
    "raius soniy",
    "jumodul avval",
    "jumodus soniy",
    "rajab",
    "sha'bon",
    "ramazon",
    "shavvol",
    "zulqa'da",
    "zulhijja",
  ];

  const monthIndex = moment().iMonth(); // Hijriy oy indeksi olish
  const hijriMonth = hijriMonths[monthIndex]; // O'zgaruvchiga Lotin oy nomini olish
  return (
    <div className="flex bg-white h-full items-center gap-3 text-[20px] px-3 rounded-[6px] md:bg-transparent md:text-white md:w-full md:px-0">
      <div className="xl:text-[18px] lg:text-[16px]">
        <span>{moment().format("YYYY")}</span>
        <span>- yil</span>
      </div>

      <div className="xl:text-[18px] lg:text-[16px]">
        <span>
          {moment().format("DD").startsWith("0")
            ? moment().format("DD").slice(1)
            : moment().format("DD")}
        </span>

        <span className="lowercase">- {moment().format("MMMM")}</span>
      </div>

      /{/* Hijriy data */}
      <div className="xl:text-[18px] lg:text-[16px]">
        <span>{moment().format("iYYYY")}</span>
        <span>- yil</span>
      </div>
      
      <div className="xl:text-[18px] lg:text-[16px]">
        <span>
          {moment().format("iDD").startsWith("0")
            ? moment().format("iDD").slice(1)
            : moment().format("iDD")}
        </span>

        <span>- {hijriMonth}</span>
      </div>
    </div>
  );
}

export default DateSwitcher;
