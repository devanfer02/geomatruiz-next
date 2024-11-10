type DetailChapterProps = {
  params: { id: string }
}

export default async function DetailChapter({ params }: DetailChapterProps) {
  const { id } = await params

  return (
    <>{id}</>
  )
}